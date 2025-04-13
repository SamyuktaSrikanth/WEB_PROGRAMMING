import React from "react";
import ProfileImage from "./ProfileImage.js";
import UserInfo from "./UserInfo.js";
import UserPosts from "./UserPosts.js";
import IndexPage from "./IndexPage.js";

function App()
{
    return(
        <>
        <ProfileImage/>
        <UserInfo/>
        <UserPosts/>
        <IndexPage/>
        </>
    );
}
export default App;