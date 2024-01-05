import { UserProfile } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const UserProfilePage = () => (
    <div className="mb-20 flex justify-center overflow-hidden rounded-3xl">
        <UserProfile path="/profile" routing="path" appearance={{
            baseTheme: dark
        }} />

    </div>
);

export default UserProfilePage;