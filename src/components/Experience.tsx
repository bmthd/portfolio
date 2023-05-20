import React, { useState } from "react";

type Experience = {
  title: string;
  start: Date | null;
  end: Date;
  description: string;
};

const experienceData: Experience[] = [
  {
    title: "SES フロントエンドエンジニア",
    start: null,
    end: new Date("2023-05-31"),
    description:
      "主に業務アプリケーションの案件に関わることが多いです。\nフロントエンドエンジニアとしてのスキルを磨くために、日々勉強を続けています。\n現在は、Java開発業務に携わりながらReactを用いたモバイルアプリケーションを勉強しています。",
  },
  {
    title: "SES フィールドエンジニア",
    start: new Date("2022-02-01"),
    end: new Date("2022-08-31"),
    description:
      "IT業界1つ目の会社は所謂ブラックSESでした。\n携わることのできた案件は、単調なデータ入力や監視カメラの設置などエンジニアと呼べるかすら怪しい業務内容でしたが、忍耐力を鍛えることができました。\nこの会社には資格取得支援制度と、仲間と競い合う環境があり、そのお陰でJava SilverとOracle SQL Blonzeを取得することができたため、大きくステップアップする事ができました。\n感謝こそすれど、後悔はありません。",
  },
  {
    title: "プログラミングスクール受講",
    start: new Date("2021-02-01"),
    end: new Date("2021-03-31"),
    description:
      "もともと興味のあったプログラミングを身につけるべく、国の支援制度で受講ができるプログラミングスクールに入校しました。\n入校前は、プログラミングの知識はほぼゼロでしたが、アルゴリズムやプログラミング言語に触れるうちに夢中になり、これならやっていけると確信を持ちました。\n2ヶ月という短期間でしたが、講師やカリキュラムが優れていたお陰で一人で簡単なアプリケーションを開発できるレベルの能力を身につけることができました。",
  },
  {
    title: "キャリアショップ販売員",
    start: new Date("2015-06-01"),
    end: new Date("2021-01-31"),
    description:
      "ケータイショップの店員として接客、販売、実績管理など多様な業務を経験しました。\nお客様の抱える問題を解決するために、自ら課題を見つけ、解決する力を養うことができました。\nまた、毎日触れているうちに業務システムに興味を持ち始めました。\n通信業界や携帯電話の最新技術に関わる仕事に従事できることは、私にとって魅力的であり、天職のように感じていました。\nところが、電気通信事業法改正を境にキャリアショップに逆風が吹き始めました。\n実績も以前のようには取れなくなり不安を感じ、転職を決意しました。",
  },
];

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div className="bg-white m-8 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <div key={index}>
          {index === 0 && (
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  index === expandedIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <div className="ml-2 text-gray-500">現在</div>
            </div>
          )}

          <div className="flex items-center">
            <div
              className={
                "ml-2 border-l-2 pl-4 " +
                (index === expandedIndex
                  ? "border-blue-500"
                  : "border-gray-300")
              }
            >
              <div className="my-4">
                <h3
                  className="text-lg font-semibold cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  {experience.title}
                </h3>
                {index === expandedIndex && (
                  <div className="text-gray-600 mt-2">
                    {experience.description.split("\n").map((line) => (
                      <p key={index} className="pb-1">{line}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full ${
                index === expandedIndex || index + 1 === expandedIndex
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />
            <div className="ml-2 text-gray-500">
              {experience.start?.getFullYear()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
