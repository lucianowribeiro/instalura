import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });
  return {
    props: {
      messages,
    },
  };
}

export default webPageHOC(AboutScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
