import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default Navbar;
