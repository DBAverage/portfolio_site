import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push(
    {
      title: "Kubernetes Home Lab",
      desc: "Enterprise-like kubernetes envrionment.",
      linkUrl: "/kubernetes_home_lab",
      image: "/containers.jpg",
    },

    {
      title: "Ansible Oracle Collection",
      desc: "Collection of Oracle plugins for Ansible.",
      linkUrl: "/ansible_oracle_collection",
      image: "/tower.jpg",
    }
  );

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
