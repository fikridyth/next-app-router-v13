export default function Layout({
  children,
  products,
  analytics,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center">
        {products}
        {analytics}
      </div>
    </div>
  );
}
