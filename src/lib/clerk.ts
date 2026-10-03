type ClerkErrorLike = {
  message?: string;
  longMessage?: string;
};

export function getErrorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const { longMessage, message } = error as ClerkErrorLike;

    if (longMessage) return longMessage;
    if (message) return message;
  }

  return "Something went wrong. Please try again.";
}
