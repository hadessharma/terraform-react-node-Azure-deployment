import TrashIcon from "../components/icons/trash";

import { Spinner, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { List, ListItem, Card, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SubscriptionModal from "../components/modal/subscription";
import { useEffect, useState } from "react";
import DeleteSubscriptionModal from "../components/modal/deleteSubscription";
import { getSubscriptions } from "../functions/get";

export default function Home() {
  // const subscriptions = ["Subscription A", "Subscription B", "Subscription C"];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");
  const [subscriptionName, setSubscriptionName] = useState("");
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSubs();
  }, []);

  const handleDelete = (subName, subId) => {
    setSubscriptionName(subName);
    setSubscriptionId(subId);
    setIsOpenDelete(!isOpenDelete);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const loadSubs = async () => {
    try {
      setLoading(true);
      const res = await getSubscriptions();
      setSubscriptions(res.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col gap-2">
      <Typography className="underline mb-3" variant="h3">
        Welcome Natalie Paisley,
      </Typography>
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Typography variant="lead" className="font-semibold">
              Select Your Subscription:
            </Typography>
            <Button ripple={true} onClick={openModal}>
              + New Subscription
            </Button>
            <SubscriptionModal
              isOpen={isOpen}
              openModal={openModal}
              loadSubs={loadSubs}
            />
            <DeleteSubscriptionModal
              isOpen={isOpenDelete}
              openModal={handleDelete}
              subscriptionName={subscriptionName}
              subscriptionId={subscriptionId}
              loadSubs={loadSubs}
            />
          </div>
          <hr className="my-3" />
          <Card className="w-full">
            <List>
              {subscriptions?.map((sub, i) => {
                return (
                  <div
                    key={i}
                    className="w-full flex flex-row items-center justify-between gap-1"
                  >
                    <Link
                      to={`/subscription/${i}`}
                      className="w-full py-1 pr-1 pl-4"
                    >
                      <ListItem ripple={true}>{sub.subscriptionName}</ListItem>
                    </Link>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() =>
                        handleDelete(sub.subscriptionName, sub._id)
                      }
                    >
                      <TrashIcon />
                    </IconButton>
                  </div>
                );
              })}
            </List>
          </Card>
        </div>
      )}
    </div>
  );
}
