import { Heading, Paragraph } from "@/components/text";
import BasicLayout from "@/components/layout/BasicLayout";

export default function Catalog() {

  return (
    <section className="relative my-10 bg-e-secondary">
      <BasicLayout>
        <div className="flex items-center justify-between gap-1 h-28">
          <div>
            <Heading
              level={3}
              className="font-semibold text-center text-e-gray"
            >
              Katalog Tren Gratis!
            </Heading>
          </div>

        </div>
      </BasicLayout>
    </section>
  );
}