export async function generateStaticParams() {
  return [];
}

export const dynamic = "force-static";

export default async function IdPage({params: {id}}: {params: {id: string}}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      {`<IdPage />`}: {id}
    </div>
  );
}
