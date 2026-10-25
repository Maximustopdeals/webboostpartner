// In app/layout.tsx

// ✅ Vervang strategy="lazyOnload" door strategy="worker" voor GTM
<Script id="gtm-script" strategy="worker">
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PSM987PS');`}
</Script>

// ✅ Ook voor GA4
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-L8ZWH28FVR"
  strategy="worker"
/>
