import { Button } from "@chakra-ui/react";

type Props = {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none" | number | string;
  color: string;
  bg: string;
}

export default function BackButton({
  text,
  size,
  rounded,
  color,
  bg,
}: Props) {
  return (
    <Button
      {...{
        size,
        rounded,
        color,
        bg,
      }}
      _hover={{
        bg,
      }}
      onClick={() => window.history.back()}
    >
      {text}
    </Button>
  );
}

BackButton.defaultProps = {
  text: "Back",
  size: "md",
  rounded: "full",
};
