import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-white m-8 p-8 rounded-lg">
      <h2 className="font-bold text-lg mb-4">About</h2>
      <Image
        src="/img/profile.jpg"
        width={200}
        height={200}
        className="rounded-full"
        alt="profile image"
      />
      <h3 className="font-bold text-lg m-4">Tomoaki Kaneko</h3>
      <div className="text-gray-500">
        <p>ご覧いただきありがとうございます。</p>
        <p>26歳のときに一念発起し、プログラミングを学び始めました。</p>
        <p> 今はフロントエンドエンジニアとして働いています。</p>
        <p> 趣味はクルマ、登山、キャンプです。</p>
        <p> 時間のあるときにはWebサービスの開発にも取り組んでいます。</p>
      </div>
    </div>
  );
}
