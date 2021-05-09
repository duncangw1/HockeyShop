import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To HockeyShop",
  description: "We sell the best hockey products for low prices",
  keywords:
    "hockey, hockey gear, hockey equipment, buy hockey gear, buy hockey equipment",
};

export default Meta;
