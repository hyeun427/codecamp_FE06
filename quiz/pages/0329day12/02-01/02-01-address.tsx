import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function AddressPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    // console.log(data);
    setIsOpen(false);
  };

  return <DaumPostcode onComplete={handleComplete} />;
}
