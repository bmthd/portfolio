import Link from "next/link";

export default function Works() {
  const works = [
    {
      title: "ポートフォリオサイト",
      release: "2023/6",
      description: "このサイトです。\n 見栄えするデザインにこだわりました。",
      url: "https://portfolio.bmth.dev/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    },
    {
      title: "ポイントスプリント",
      release: "2023/5",
      description:
        "楽天市場のお買い物マラソンで獲得できる楽天ポイントを計算するWebアプリです。\n スマートフォン向けとPC向けそれぞれに最適化した別のUIを作成し、本気で使いやすいツールを目指しました。",
      url: "https://point-sprint.bmth.dev/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Netlify", "Rakuten API"],
    },
    {
      title: "メール文章作成くん",
      release: "2023/5",
      description:
        "メールのテンプレートを登録しておき、ボタン一つで文章を作成できるHTMLツールです。\n小規模な事業者を想定し、シンプルに仕上げました。",
      url: "https://bmthd.github.io/mail/",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    },
    {
      title: "コミケお品書きツイートまとめサイト",
      release: "2022/12",
      description:
        "同人イベント、コミックマーケット参加者のツイートを自動で収集しまとめるサイトです。\n 膨大な参加者を配置コード毎にまとめ、サークルチェックしやすいように工夫しました。自宅のサーバー上にホスティングしています。",
      url: "https://oshinagaki.bmth.dev/",
      tags: [
        "Java",
        "Spring Boot",
        "Thymeleaf",
        "MySQL",
        "CentOS",
        "Apache",
        "Twitter API",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white m-8 p-8 rounded-lg">
      <h2 className="font-bold text-lg mb-4">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {works.map((work, key) => (
          <div
            key={key}
            className="flex flex-col items-center bg-white rounded-lg"
          >
            <h3 className="font-bold text-lg m-4">{work.title}</h3>
            <div className="text-gray-500 mb-4">
              <p>リリース：{work.release}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center mb-2">
              {work.tags.map((tag, key) => (
                <span
                  key={key}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link className="underline text-blue-500 mb-2" href={work.url} target="_blank">
              {work.url}
            </Link>
            <div className="text-gray-500">
            {work.description.split("\n").map((line,index) => (
                      <p key={index} className="pb-1">{line}</p>
                    ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
