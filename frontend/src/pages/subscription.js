import TrashIcon from "../components/icons/trash";

// import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
  List,
  ListItem,
  Card,
  IconButton,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Subscription() {
  //   const { id } = useParams();

  // const resources = ["Resource A", "Resource B", "Resource C"];

  const handleDelete = (e, sub) => {
    e.stopPropagation();
    alert(sub);
  };

  //We will fetch this from database.
  const data = [
    {
      label: "Resource Groups",
      value: "rg",
      resources: ["Resource Group A", "Resource Group B", "Resource Group C"],
    },
    {
      label: "Virtual Machines",
      value: "vm",
      resources: [
        "Virtual Machine A",
        "Virtual Machine B",
        "Virtual Machine C",
      ],
    },
    {
      label: "Virtual Networks",
      value: "vnet",
      resources: [
        "Virtual Network A",
        "Virtual Network B",
        "Virtual Network C",
      ],
    },
    {
      label: "Storage Accounts",
      value: "sa",
      resources: [
        "Storage Account A",
        "Storage Account B",
        "Storage Account C",
      ],
    },
    {
      label: "Key Vaults",
      value: "kv",
      resources: ["Key Vault A", "Key Vault B", "Key Vault C"],
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
        <Card className="w-full">
          <Tabs id="custom-animation" value="html">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, resources }) => (
                <TabPanel key={value} value={value}>
                  <List>
                    {resources.map((res, i) => {
                      return (
                        <div
                          key={i}
                          className="w-full flex flex-row items-center justify-between gap-1"
                        >
                          {/* <Link to={`/resource/${i}`} className="w-full py-1 pr-1 pl-4"> */}
                          <ListItem ripple={true}>{res}</ListItem>
                          {/* </Link> */}
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={(e) => handleDelete(e, res)}
                          >
                            <TrashIcon />
                          </IconButton>
                        </div>
                      );
                    })}
                  </List>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

// <List>
//   {resources.map((res, i) => {
//     return (
//       <div className="w-full flex flex-row items-center justify-between gap-1">
//         {/* <Link to={`/resource/${i}`} className="w-full py-1 pr-1 pl-4"> */}
//         <ListItem ripple={true}>{res}</ListItem>
//         {/* </Link> */}
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           onClick={(e) => handleDelete(e, res)}
//         >
//           <TrashIcon />
//         </IconButton>
//       </div>
//     );
//   })}
// </List>;
