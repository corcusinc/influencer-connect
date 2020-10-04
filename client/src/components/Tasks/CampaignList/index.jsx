import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/campaigns";
import CampaignItem from "./CampaignItem";

import "./CampaignList.scss";

export default function Tasks(props) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((data) => {
      setCampaigns(() => {
        return data;
      });
      props.onClick(data[0].campaignId);
    });
  }, []);

  const campaignsList = campaigns.map((el) => {
    if (el) {
      return (
        <CampaignItem onClick={props.onClick} key={el.campaignId} {...el} />
      );
    }
    return {};
  });

  return (
    <section id="campaign-list">
      <ul>{campaignsList}</ul>
    </section>
  );
}
