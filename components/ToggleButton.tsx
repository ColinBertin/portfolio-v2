"use client";

type ToggleButtonProps = {
  isOn: boolean;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  handleToggle: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ToggleButton({
  isOn,
  onIcon,
  offIcon,
  handleToggle,
  ...rest
}: ToggleButtonProps) {
  return (
    <button onClick={handleToggle} {...rest}>
      {isOn ? onIcon : offIcon}
    </button>
  );
}
