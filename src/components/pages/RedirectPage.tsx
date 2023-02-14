export const RedirectPage = () => {
  return (
    <div className="text-center flex flex-col gap-20 text-xl mt-96">
      <p>ログインが必要です。</p>
      <a className="text-blue-600 hover:font-semibold" href="/login">
        ログインページへ
      </a>
    </div>
  );
};
