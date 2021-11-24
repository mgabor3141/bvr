import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import { BpBox } from "../../BpBox/BpBox";
import styles from "./Factorio.module.css";

const SOLUTION_LENGTH = 7;

export const Factorio = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "factorio");

  return (
    <>
      <h1 className={styles.title}>
        <Fade top delay={500} duration={1500}>
          Dipper and Maple
          <br />
          are in another castle
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className={styles.textBox}>
          TODO Well now we go to Factorio etc etc Solution 7355608
          <BpBox bp="0eNrdXctuG8sR/ZWbWY8uuqrfQhAgF8kPZJFNYBh68NoEJEqgKCeGoH/PUEJko2sOUcUsgsrGsCgNe+Z0Pc50VZ9+ma7vnjeP++3uMF2+TLebp5v99vGwfdhNl9Pfnp++/vLb/Mtvd9+vDn+Y5ml787B7mi7/8TI9bb/sru6Olxy+P26Wv/223R+el0/maXd1f/zg/S8u/jK9Ltftbjf/mi7pdTZc+eefrmTTlX//6cpouvKvP12ZXj/N02Z32B62m/eHfvvh++fd8/31Zr88zo+r76/u7i42d5ubw357c/H4cLdZvvrx4Wn7juTLtHzfBcVf8zx9X/5Xfs3LOLvN9svX64fn/fHbea7p0/Feh0HYOEg9MQbNcW68Nkq0PsrJJ0lzD2ujJNso6cQgcc5zb2uDZNsgFE6MkuYyUyhrwxTjMOXEMHmuM9Hq9FfbMMwnhlmehVdnvw2D3F3dP65N+seEpLcvX4LBYf9w9/l68/Xq2/Zhf/y7m+3+5nl7+Lz87vbj4t+3+6fDZ+GE28Pm/ocHftlvdle3m+n9i58OV8eIFI4/3D9e7a8Ox++f/jS9vv9+t8CwfQtGLxMd/1ku3+x+9tLt7XTZf3rY489Er59eX1cQ6EoEsjcE2oBAigABCkoI2BsERKMVMMKAlBhEdxiEAYOGIGAlBOQegpQRBlGHQXMHQRo9oSAIkg6C7g6COFpBRRBkHQTFHQRltAIIQdFBUN1bAcFYUHUQuCMGyxMPjtARBEp66I8YjPSQET0kJT/0xwtGfpgRBKzkh8EbBDzSQ0b0kLX00L0VcEAQ6OihPyMYyWFOCAEdOXQXCXjkhoy4Ieu4obt0wCMpyIgUsI4auuMEPDJDRsyQdcwwubcBhjagI4bu3g545IUZ2oCOF7p7ReSRFkbIiXS00N06AQtWiN4Noo4V+lstiiMrjIgVRh0rpODeCiJihVHHCv0tHceRFhZoBTpa6K+AEEdeGBEvjDpe6K+KFEdSUNDLQdQRQ3K3YBZHZhgRK4g6ZkjFvRVERA2jjhqSO14QR25YIAQ6bsj+eMFIDhMih1FHDtkdL4gjLygoFiQdO2R3iyVpZIcJ8YKkY4fM7q0gIXaYdOyQ3fGCNLLDCiGI1v6S+B8Mzmt0SYihpGS9E7bdSRrTZIWuka2tBtHLejqP04E4cypWDNiLc4xcocIsUY29BkbfEF0PCTW/pGa8E6tv1LELBwaMbiw7u3GNEYKMIMjBCIEbzxiDdUMsOpOx7By9Vt4zShKZjRB4sYI8UsiGolKOtprr/wyBPxoRGONyR72pOdkQiF4QiNrWg5xtNdfoteqcEVPKxYaAmzgw8qSOeFI2Vhy9eAELSgAjYbMh4CYSjghQQKtK2VhyjF6LrgXxwhJsCLgJBGKzSkAv8YWM9TYvjlBYYIAqz8Vac/QSDou68lyiseDmxRWK2KcAt+wUa9Exeq27FsSOSzaWm9xAMKbFgshhKUYI3HhCFp6A6GGpxnpT9FpyK4gflmaEwI0ZCIIIO7RLN1ZbvGBQg8AArZvVYMTAiyuUrq07VrLu6Q62tewq6jwoOFe2lpzIuKw+psqKUmU11+GsqIwEtsrNxyiA13S2ngStaT00nimvSiTUbN3rbYVhbBeqKGTXYt1ybb2VcQIqjBrVWosjLxUH/XQ0KwbBS/qo0g5Gz0TvmrUbN4R7AaWJIgRacmjBWBq1xvCxnaShFbBGxjtxMxminUSsCMGdCO1smaCV1LEkIp57mKmsKt+0aNwY72YCRh7REKVpybgx3k2UFLVpRKVaNpbnvSTLHNRWUIwQuHGEKDsUxkgEE0U1qgW4AWV0jY7evVoz9iy4cY3x7aYhxtSsgglurEDwFLE0A/cF9HCuyt5Kkl4yfpx7m2ldNrCTUa7BywT00QY7ikSdjXINbmxwNLkOZe2MrUPktXEGG4GxdciNG5BsnhrjEHrJ79kmYeEGEyFsFdAqeTd2E7mBYKWbaMAE7tPo1YYJeTUL2GPW25kCtSv5eUn26agdO9O64m7vNg2R4EZmUdRpAtTbDMEmI+LXDaG4WiBbT5ubFN0MZsA2DNyYQV/p6xvDMUYl2hrd/EQI0d4TxPrCCZ3iZIPFS5oqMm5iDLJNesePaQgWG6BScSjnKr2vpes256MG+0zr0vUUqlHpxg/mIlJTgJg3o9iNHxRECApQFjd0Y+8pee09PWEKSsF4Yn+mUFe6kMf8BAWDlSLy5I7UktjWTFJHGctpK5XlKXlL3CQOGICtukRWmShjt4u8F8Ia75TOPcNkrd9oScdvB4wsGXS16YjIKo5kfnax/kOQPJBVpsh8M8I1sMY4WQWD3HBay4w0Iwh+4uZaE/cYN+ECgVJ7nP0RT5a9kQkeSxKMrd1uXESwb6xCrxQgZ3/sW+hvk5AIIKgRQMznnpK1lsiWtFhnXj/1i5Ty3xz9TYFYlYEK4KSVAPfH/aXZMSRzShlwdsdoSzeYQjGC4Mch4sqGkzEm4YRVjVsN/tv9F8T4TK9mvBdj8y6JLfyUscF0Y4u5m95JkcmhYDLFYATBzcuw2MhPBfKZaGzlNrqI6G4nuJWalBLWH7di9RChJ05QRJiUWtIX2ZttRHn+HHztUapJX2RnUYKEjjDsLyalnPRHF6XVP+T+AnwrxXYrZv8QqbViX62mni4/7iESCNynRUqB5eDMO7qIEFBonLQCy2dapFB3JbglibRCx+f5KYkd8B2f22lrJ3HjG0nUHnDYTLZ2Ej91KYFBwhZpax5x3CAApY4p2TpF/PiCwADuwyClyDKxN0MQxzlTwgGh2EDwYwmCNXXsDdVWfw1uy68EBZ5JqfD8AYIfSxArMFBHkpTi0uQuOYhzTAmqS5NSXpr8ZQdxqjFuvM3GgpIbEMRORQ6w+q6UmGZv71KUSV9aVIpMs7vAKFSmGbe0KXWm2V2KzFFf0MnZqBxlPY5Bqt0WPCPFWLlga+VCpgyYN7O1pGNGRrTLZBy12rlqUbyq+AHEPih3o1aU9aFl3zs8ZJFKMKpFmWdAVvjgq1UhYw2H3SxEWqaEjSi4OaMir1Wyxk+gfyrFeT80o9zAIiVJoR4nKdV5P6pq1ugd2TAh2XYvfiZEVtWiwX/LmcpRK2nkmJSOqoPrkhSkVKj9EI7yMwOycAMZjVKj9gNmPyBIo4NMqhiPt2K3xd0TllCNB1z5sYS6UuYfYYFddVrlWvYGi+zYgpK5VI3HXpkTZzFMSLTdi58JEexBqvWecN90ppoTr4pFHBMxkIogrV5vcDcD0gxhzlArBbsDQRodJLHV1vriB4O80voyFjmxK9qaYdywiVr13TBKjWJ3QbrJNhxY4my2Nhw/3tFXwqS6OUkpmMxnUgk5QREumVllitOJd80l/x7lD4Fcg1Kk2B23FhrFBE+PJaVKcfLvDkKwlgm7QzZ1h/mxjLjSITd+AlfqlFrGxVsKlcrFuGdOKV3sboFQaNYSlC4mpXaxu1VrKdMrLQN30TXbqZtuvCMlfYSwqhdTOJG833URoVSEUr3YX01JqBcTPPSalPrFFPz7IhQwJqWCMbnj9ELAl+TeB9zmr5Q1JnYXkYrBQbJNTMePbRTRvQbXPpRKxuSO5fe8YgnqHtdu7Hb24yDNECXamQJPayn7uEZNCQpjKPWMyVtdk4WeMcPD2VmpZ0zl/8AZOwSBbJ3VfkBY66weP0kQFrbB4iYiZYuDRJuYlZ8oIdqMoXAtKxWMObgDIa5YgrYPn5WixuyujJPJECXKmVJWaykbizGyUs6YozsbbAJsnKmaTcbKsyNWCILxwHA/IFT1zg8m44nh7AYEKaMXIQg/iNs/Hx5uN7uLm6+bpwOuGGVrqfA97H2a35/8crq+e9487re74xjfNvuntyG4Uaqdayqdy+LOr/8GZjpYWg==" />
        </div>
      </Fade>

      <div className={styles.codeEntryContainer}>
        <Fade top delay={3500} duration={1500}>
          <HeadShake when={shake}>
            <AuthCode
              onChange={setCode}
              characters={SOLUTION_LENGTH}
              containerClassName={styles.container}
              inputClassName={styles.input}
            />
          </HeadShake>
        </Fade>
      </div>
    </>
  );
};
