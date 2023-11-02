import Script from "next/script";

export default function GoogleAnalytics() {
  const googleAnaylticsTrackingId =
    process.env.NEXT_PUBLIC_GOOGLE_ANAYLTICS_TRACKING_ID;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnaylticsTrackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnaylticsTrackingId}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
