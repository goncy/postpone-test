"use client";

import Link from "next/link";
import {useLayoutEffect, useRef, useState} from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Product 2 description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "Product 3 description",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "Product 4 description",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    description: "Product 5 description",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    description: "Product 6 description",
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    description: "Product 7 description",
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    description: "Product 8 description",
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    description: "Product 9 description",
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    description: "Product 10 description",
  },
  {
    id: 11,
    name: "Product 11",
    price: 1100,
    description: "Product 11 description",
  },
  {
    id: 12,
    name: "Product 12",
    price: 1200,
    description: "Product 12 description",
  },
];

export default function HomePage() {
  const [skeleton, setSkeleton] = useState<React.ReactNode>(null);
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (skeleton) return skeleton;

  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="grid gap-2 rounded-md bg-foreground/5 p-4">
            <h2 className="text-xl font-medium">{product.name}</h2>
            <p className="text-sm text-foreground/80">{product.description}</p>
            <p>
              {Number(product.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <Link
              href={`/${product.id}`}
              prefetch={false}
              onClick={async () => {
                const skeleton = (await import("@/app/[id]/loading")).default;

                setTimeout(() => {
                  if (isMounted.current) {
                    setSkeleton(skeleton);
                  }
                }, 100);
              }}
            >
              <button className="w-full" type="button">
                See more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
