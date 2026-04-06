import React, { useState, useEffect } from 'react';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Working proxies (swap if one fails)
  const PROXIES = [
    'https://corsproxy.io/?',  // Simple & reliable
    'https://thingproxy.freeboard.io/fetch/',  // HTTPS-friendly
    'https://api.codetabs.com/v1/proxy?quest='  // Another solid option
  ];
  const RSS_URL = 'https://www.gamingonlinux.com/article_rss.php?newsonly';

  const fetchWithProxy = async (proxy, url) => {
    const response = await fetch(`${proxy}${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error(`Proxy failed: ${response.status}`);
    return response.text();
  };

  useEffect(() => {
    const loadNews = async () => {
      for (const proxy of PROXIES) {
        try {
          const xmlText = await fetchWithProxy(proxy, RSS_URL);
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlText, 'text/xml');
          const items = Array.from(xml.querySelectorAll('item')).slice(0, 6);
          const parsedItems = items.map(item => ({
              title: item.querySelector('title')?.textContent || 'No title',
              link: item.querySelector('link')?.textContent || '#',
              pubDate: item.querySelector('pubDate')?.textContent || 'No date',
              description: item.querySelector('description')?.textContent || 'No description'  // Add this
              // enclosure: item.querySelector('enclosure') ? { url: item.querySelector('enclosure').getAttribute('url') } : null  // Rarely present
            }));
            
          setNewsItems(parsedItems);
          setLoading(false);
          return;  // Success, stop trying proxies
        } catch (err) {
          console.warn(`Proxy ${proxy} failed:`, err.message);
        }
      }
      setError('All proxies failed. Try refreshing.');
      setLoading(false);
    };

    loadNews();
  }, []);

  if (loading) return <div style={{ padding: '1rem' }}>Loading news...</div>;
  if (error) return <div style={{ padding: '1rem', color: 'red' }}>Error: {error}</div>;


return (
  <>
    <h2 style={{ textAlign: 'Center', fontSize: '3.4rem', marginBottom: '1.5rem', fontWeight: "bolder" }}>
        Gaming on Linux News
      
    </h2>
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    }}>
      {newsItems.map((item, index) => (
          <div key={index} style={{
              backgroundImage: 'linear-gradient(rgb(40, 1, 103), rgb(8, 8, 8))',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              border: '1px solid #eee'
          }} onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
          }} onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
      }}>
          <div style={{
              width: '100%',
              height: '12rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              marginBottom: '1rem',
              display: 'block',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
          }}>
                        <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                  color: '#111',  // No blue
                  textDecoration: 'none',  // No underline
                  display: 'block',
                  transition: 'color 0.2s ease',
                  fontSize: '1rem',
                  paddingTop: '1rem',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#333'; }}
              onMouseLeave={(e) => { e.target.style.color = '#111'; }}
              >
              {item.title}
            </a>
            <div style={{
                display: 'block',
                paddingTop: '1rem',

                }}>
              📰
            </div>
          </div>
          <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
          }}>
          </h3>
          <p style={{
              color: '#666',
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'clip',
              fontSize: '0.9rem',
              lineHeight: '1.4'
          }}>
            {item.description || 'No description available.'}
          </p>
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: '#888'
          }}>
            <span>{item.pubDate ? new Date(item.pubDate).toLocaleDateString() : 'No date'}</span>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '0.8rem'
              }}>
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  </>
);



//   return (
//     <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h3 style={{ marginTop: 0 }}>Gaming on Linux News</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {newsItems.map((item, i) => (
//           <li key={i} style={{ marginBottom: '0.5rem' }}>
//             <a 
//               href={item.link} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.95em' }}
//             >
//               {item.title}
//             </a>
//             <br />
//             <small style={{ color: '#666' }}>
//               {item.pubDate ? new Date(item.pubDate).toLocaleDateString() : 'No date'}
//             </small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default News;