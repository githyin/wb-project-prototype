import React from "react";
import Sidebar from '../component/Sidebar/Sidebar';

function Test() {
  // Sidebar에 전달할 props 설정
const sidebarProps = {
    color: "blue",
    image: "url-to-image",
    routes: [
    {
        path: "/dashboard",
        name: "대시보드",
        icon: "fa fa-dashboard",
        layout: "/admin",
    },
    {
        path: "/profile",
        name: "프로필",
        icon: "fa fa-user",
        layout: "/admin",
    },
    {
        path: "/settings",
        name: "설정",
        icon: "fa fa-cog",
        layout: "/admin",
    },
    ],
};

return (
    <div>
      {/* Sidebar 컴포넌트 사용 */}
    <Sidebar {...sidebarProps} />
      {/* 나머지 컴포넌트들 */}
    </div>
);
}

export default Test;