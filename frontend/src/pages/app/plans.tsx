import { atom, useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";

import { planFamily } from "@/atoms/planFamily";
import { plansIds } from "@/atoms/plansIds";
import { Plan } from "@/components/Plan";
import { Seo } from "@/components/SEO";
import { SolvroLogo } from "@/components/SolvroLogo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plansAtom = atom(
  (get) => get(plansIds).map((id) => get(planFamily(id))),
  (get, set, values: Array<{ id: string }>) => {
    set(plansIds, values);
  },
);

const loginUser = async () => {
  const userData = {
    id: "123",
    password: "aa",
  };
  try {
    await fetch("http://localhost:3333/login", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  } catch (e) {
    /* empty */
  }
};

const postPlanToBackend = async (scheduleId: string) => {
  const scheduleData = {
    id: scheduleId,
    name: "Nowy plan",
    userId: "123",
  };
  try {
    await fetch("http://localhost:3333/users/123/schedules", {
      method: "post",
      body: JSON.stringify(scheduleData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  } catch (e) {
    /* empty */
  }
};
const Plans = () => {
  const [plans, setPlans] = useAtom(plansAtom);
  const router = useRouter();
  const uuid = crypto.randomUUID();
  const addNewPlan = () => {
    const newPlan = {
      id: uuid,
    };

    void loginUser();

    void postPlanToBackend(newPlan.id);

    void window.umami?.track("Create plan", {
      numberOfPlans: plans.length,
    });

    void router.push(`/app/createplan/${newPlan.id}`).then(() => {
      setPlans([...plans, newPlan]);
    });
  };

  return (
    <>
      <Seo pageTitle="Twoje Plany | Planer" />
      <div className="flex h-screen flex-col items-stretch">
        <div className="flex max-h-20 min-h-20 w-full items-center justify-between bg-mainbutton7">
          <div className="ml-4 flex items-center gap-2 text-2xl font-bold text-white md:w-1/4">
            <SolvroLogo />
            <div className="md:hidden">Plany</div>
          </div>
          <div className="hidden w-1/2 items-center justify-center font-bold text-white md:flex md:text-4xl">
            Twoje plany
          </div>
          <div className="mr-4 flex w-1/4 items-center justify-end">
            <Link
              href="/"
              data-umami-event="Back to homepage"
              className={cn(buttonVariants({ variant: "link" }), "text-white")}
            >
              <span className="text-nowrap">Strona główna</span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto max-h-full flex-1 flex-grow overflow-y-auto p-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-lg border-2 border-dashed border-gray-400 p-4 shadow-xl">
              <Button onClick={addNewPlan}>Dodaj nowy plan</Button>
            </div>
            {plans.map((plan) => (
              <Plan key={plan.id} id={plan.id} name={plan.name} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex w-full flex-1 items-center justify-center bg-mainbutton7 p-2">
            <p className="text-center text-white">
              Made with ❤️ by{" "}
              <a
                href="https://solvro.pwr.edu.pl/"
                className="font-bold text-mainbutton hover:underline"
              >
                SOLVRO
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
