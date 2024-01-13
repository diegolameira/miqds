import { Button } from '@/components/buttons';

function NavButton({ icon, onClick = () => {}, ...props }) {
  return (
    <Button
      align="left"
      className="font-bodyM-400"
      leftIcon={icon}
      onClick={onClick}
      variant="tertiary"
      {...props}
    />
  );
}

NavButton.displayName = 'NavButton';

export { NavButton };
