import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

const Footer = () => {
    const github_icon = <FontAwesomeIcon icon={faGithub} />;
    const linkedin_icon = <FontAwesomeIcon icon={faLinkedin} />;

    return (
        <div className="text-center border-t border-slate-300 p-4 text-slate-400">
            <div>Designed and built by Tyler</div>
            <div className="flex justify-center gap-2 text-sm">
                <Link href={"https://github.com/DBAverage"}>
                    <div className="text-3xl text-slate-300">{github_icon}</div>
                </Link>
                <Link href={"https://www.linkedin.com/in/tyler-klier/"}>
                    <div className="text-3xl text-slate-300">{linkedin_icon}</div>
                </Link>
            </div>
        </div>
    )
}

export default Footer