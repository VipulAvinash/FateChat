const AuthImagePattern = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-primary/5 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        <h2 className="text-4xl font-bold text-primary mb-4">Welcome!</h2>
        <p className="text-gray-600 text-base">
          Join us and experience seamless service with just a few clicks.
        </p>
        <p className="text-center text-sm text-muted-foreground dark:text-gray-400 mt-2">
          Let <span className="font-semibold text-primary">Fate</span> bring you
          the right person to{" "}
          <span className="font-semibold text-primary">Chat</span>.
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
