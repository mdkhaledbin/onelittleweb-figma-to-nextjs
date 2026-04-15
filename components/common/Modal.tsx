"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  const router = useRouter();
  const scrollPositionRef = useRef<number>(0);
  const preventScrollRef = useRef<boolean>(false);

  useEffect(() => {
    preventScrollRef.current = true;

    // Store the current scroll position
    scrollPositionRef.current =
      window.scrollY || document.documentElement.scrollTop;

    // Get the scrollbar width to prevent layout shift
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Lock body scroll when modal opens
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Add padding to prevent layout shift caused by scrollbar hiding
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Immediately scroll back to the original position
    window.scrollTo(0, scrollPositionRef.current);

    // Prevent all scroll events
    const preventScroll = (e: Event) => {
      if (preventScrollRef.current) {
        const target = e.target as HTMLElement;
        // Allow scrolling within modal, only prevent body scroll
        if (!target.closest('[role="dialog"], .modal-content')) {
          e.preventDefault();
        }
      }
    };

    // Prevent arrow keys, page up/down, home/end
    const preventScrollKeys = (e: KeyboardEvent) => {
      if (!preventScrollRef.current) return;

      const target = e.target as HTMLElement;
      // Allow scrolling within modal with keyboard
      if (target.closest('[role="dialog"], .modal-content')) {
        return;
      }

      const scrollKeys = [32, 33, 34, 35, 36, 40]; // Space, PgUp, PgDn, End, Home, Down
      if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();
      }
    };

    // Add event listeners with passive: false so we can prevent them
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventScrollKeys, { passive: false });

    // Stop browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      // Restore scroll behavior
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }

      preventScrollRef.current = false;

      // Reset overflow styles
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      // Remove event listeners
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventScrollKeys);

      // Restore scroll position when modal closes
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, []);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    router.back();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close modal"
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          role="dialog"
          className="modal-content bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Body */}
          <div className="p-8 pt-12">{children}</div>
        </div>
      </div>
    </>
  );
}
