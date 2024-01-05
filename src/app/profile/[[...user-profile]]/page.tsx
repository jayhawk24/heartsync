import { UserProfile } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const UserProfilePage = () => (
    <div className="mb-20 flex justify-center overflow-x-hidden rounded-3xl overflow-y-scroll">
        <UserProfile path="/profile" routing="path" appearance={{
            baseTheme: dark
        }} />

    </div>
);

export default UserProfilePage;