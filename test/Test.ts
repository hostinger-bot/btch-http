import { HttpGet } from '../dist/index';

(async () => {
  console.log('Testing TikTok Downloader via backend1.tioo.eu.org...\n');

  const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226';
  const endpoint = 'ttdl';
  const baseUrl = 'https://backend1.tioo.eu.org';
  const version = '1.0.0';
  const timeout = 60000;

  try {
    const result = await HttpGet<any>(
      endpoint,
      url,
      version,
      timeout,
      baseUrl
    );

    console.log('[SUCCESS] Response:\n');
    console.log(JSON.stringify(result, null, 2));
  } catch (error: any) {
    console.error('[ERROR] Request failed:');
    console.error('   Message:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Body:', JSON.stringify(error.response.data, null, 2));
    }
  }
})();