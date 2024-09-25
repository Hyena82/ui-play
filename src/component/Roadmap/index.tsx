import "./my-css.css";

function Roadmap() {
  const roadmapItems = [
    { item: ["Initialize project", "Set up repository"], year: 2023 },
    {
      item: ["Set up development environment", "Install dependencies"],
      year: 2023,
    },
    {
      item: ["Set up development environment", "Install dependencies"],
      year: 2024,
    },
    { item: ["Build and deploy", "Deploy to production"], year: 2024 },
  ];

  return (
    <div>
      <h1>Project Roadmap</h1>
      <div className="roadmap">
        {roadmapItems.map((roadmapItem, index) => (
          <div key={index} className="roadmap-item">
            <div className="year">{roadmapItem.year}</div>
            <div className="roadmap-content">
              <ul>
                {roadmapItem.item.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
