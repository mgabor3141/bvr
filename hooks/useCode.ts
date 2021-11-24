import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCode = (solutionLength: number, stepName: string) => {
  const [code, setCode] = useState("");
  const [shake, setShake] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (code.length != solutionLength) return;

    (async () => {
      try {
        const { data: response } = await axios.get("/api/solution", {
          params: { code, stepName },
        });

        await router.push(response.redirectTo);
      } catch (e) {
        const { response } = e as AxiosError;
        if (response?.status !== 418) throw e;

        setShake(false);
        setShake(true);
      }
    })();
  }, [code, router, solutionLength, stepName]);

  return { setCode, shake };
};
