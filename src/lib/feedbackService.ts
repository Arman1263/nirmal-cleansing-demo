import type { FeedbackFormData } from './validation';

export interface FeedbackSubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Isolated submission handler to simulate network dispatch.
 * In production, replace this function with an HTTP fetch() call to a backend endpoint,
 * FastAPI webhook, Telegram Bot API, or CRM form service.
 */
export async function submitCustomerFeedback(
  data: FeedbackFormData
): Promise<FeedbackSubmissionResult> {
  // Simulate network roundtrip latency
  await new Promise((resolve) => setTimeout(resolve, 850));

  // No localStorage or sessionStorage persistence - demo only
  // Log locally for demonstration review
  if (import.meta.env.DEV) {
    console.info('[NIRMAL DEMO FEEDBACK DISPATCHED]:', {
      timestamp: new Date().toISOString(),
      ...data,
    });
  }

  return {
    success: true,
    message: 'Thank you for sharing your feedback with Nirmal. We appreciate your time!',
  };
}

