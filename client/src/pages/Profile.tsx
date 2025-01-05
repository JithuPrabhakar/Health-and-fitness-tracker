import { useState } from "react";
import EditProfile from "../components/Profile/EditProfile/EditProfile";
import ProfileNav from "../components/Profile/ProfileNav";
import Role from "../components/Profile/Role";
import Security from "../components/Profile/Security";

const Profile = () => {
   const [isProfile, setIsProfile] = useState(false);
   const [isSecurity, setIsSecurity] = useState(false);
   return (
      <>
         <div className="flex  gap-4 mt-8 px-32">
            <ProfileNav
               isProfile={isProfile}
               setIsProfile={setIsProfile}
               isSecurity={isSecurity}
               setIsSecurity={setIsSecurity}
            />
            <div className="flex flex-col gap-4">
               {isProfile && <EditProfile />}
               {isSecurity && <Security />}
               <Role />
            </div>
         </div>
      </>
   );
};

export default Profile;
