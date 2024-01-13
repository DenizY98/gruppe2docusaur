import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MapComponent from '../components/MapComponent';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
  
        <main>
      
          <MapComponent position={[48.77318, 9.17082]} zoom={13} />
        </main>
      </Layout>
    );
  }