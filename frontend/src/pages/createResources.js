import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ResourceCard } from "../components/cards/resource";

export default function CreateResources() {
  const resources = [
    {
      id: 1,
      name: "Resource Group",
      image:
        "https://abouconde335669239.files.wordpress.com/2019/02/resourcegroup_color.png?w=640",
      description:
        "A container that holds related resources for an Azure solution.",
    },
    {
      id: 2,
      name: "Virtual Machine",
      image:
        "https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-azurevirtualmachines/0.6.5/1684355349075/Microsoft.VisualStudio.Services.Icons.Default",
      description:
        "An Virtual machine which gives you the flexibility of virtualization without having to buy and maintain the physical hardware that runs it",
    },
    {
      id: 3,
      name: "Virtual Network",
      image:
        "https://miro.medium.com/v2/resize:fit:666/1*X8HJaeivdCBiQYOGau0ZaA.png",
      description:
        "A service that provides the fundamental building block for your private network in Azure",
    },
    {
      id: 4,
      name: "Storage Account",
      image:
        "https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-azurestorage/0.15.3/1686611602534/Microsoft.VisualStudio.Services.Icons.Default",
      description:
        "It contains all of your Azure Storage data objects: blobs, files, queues, and tables.",
    },
    {
      id: 5,
      name: "Key Vaults",
      image:
        "https://azure.microsoft.com/svghandler/key-vault/?width=600&height=315",
      description: "A cloud service that provides a secure store for secrets",
    },
  ];

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col gap-2">
      <Typography className="underline mb-3" variant="h3">
        Subscription Name :
      </Typography>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="font-semibold">
            Your Resources:
          </Typography>
          <Link to="/create/resources">
            <Button ripple={true}>Create Resource</Button>
          </Link>
        </div>
        <hr className="my-3" />
        <div className="w-full flex-row flex gap-3 flex-wrap">
          {resources.map((res, i) => {
            return (
              <ResourceCard
                key={i}
                name={res.name}
                desc={res.description}
                img={res.image}
                link={`${res.name.toLowerCase().replaceAll(" ", "")}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
