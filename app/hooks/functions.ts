export function formatNumberWithCommas(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

    // デバウンス関数。指定した時間内に複数回呼ばれた場合、最後の1回だけ実行する
    export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
      let timeout: NodeJS.Timeout;
      return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }