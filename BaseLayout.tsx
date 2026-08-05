// src/layouts/AppShell.tsx
import {type ReactNode, useEffect, useState} from "react";
import {Link} from "wouter";
import {DKM_BUILD_VERSION} from "../version.ts";
import {get_version, type VersionInfo} from "../ws/dkmfakt_root.ts";


type Props = {
    children: ReactNode
    menu: ReactNode
    sidebar?: ReactNode
};

export default function BaseLayout(props:Props) {

    const [s_versionInfo, s_setVersionInfo] = useState<VersionInfo|undefined>();

    useEffect(() => {
        get_version().then(res=> s_setVersionInfo(res))
    }, []);

    function renderSideBar() {
        if (props.sidebar) {
            return (
                <div id={"sidebar"}>
                    {props.sidebar}
                </div>
            )
        }
        return null;
    }
    if (!s_versionInfo) {
        return null;
    }

    return (
        <>
        <div id={"menu"}>
            {props.menu}
        </div>
            {renderSideBar()}
        <div id={"content"}>
            <div className="min-h-screen grid grid-rows-[auto_1fr_auto] content">
                <header className="border-b p-4"><Link  className={"underline"} to={"/"}>Dkm-Fakturierung -  Home </Link></header>
                <main className="p-2">{props.children}</main>
                <footer className="border-t p-1 text-sm">© {new Date().getFullYear()},
                    Client Version:{DKM_BUILD_VERSION},
                    Server Version Info: db={s_versionInfo.db_name},
                    srv={s_versionInfo.db_server},
                    version={s_versionInfo.version}
                </footer>
            </div>

        </div>
        </>
    )
}

