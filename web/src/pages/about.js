import React from "react";

// Components
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/utilities/SEO";

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="" description="" />
    <Link to="/contact">contact</Link>
    <Link to="/">home</Link>
  </Layout>
);

export default PrivacyPolicyPage;
