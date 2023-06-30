"use client";

import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 font-medium"
      onClick={() => router.back()}
      aria-label="close modal"
    >
      <X className="w-4 h-4" />
    </Button>
  );
};

export default CloseModal;
