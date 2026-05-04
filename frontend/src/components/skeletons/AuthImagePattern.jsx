const AuthImagePattern = () => {
  return (
    <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-base-200/40 via-base-100/30 to-base-300/40 backdrop-blur-md border border-base-300/40 rounded-3xl m-4 select-none hover:border-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-accent/20 opacity-0 animate-fade-in border border-primary/5 shadow-sm transition-all duration-500 hover:scale-105 hover:rotate-2 hover:bg-primary/25 hover:border-primary/20`}
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
          Welcome to FateChat
        </h2>
        <p className="text-base-content/70 text-base font-medium leading-relaxed max-w-sm mx-auto">
          Join our community and experience the future of conversation with just a few clicks.
        </p>
        <p className="text-center text-sm text-base-content/60 mt-3 font-medium">
          Let <span className="font-bold text-primary">Fate</span> bring you
          the right person to <span className="font-bold text-accent">Chat</span>.
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
