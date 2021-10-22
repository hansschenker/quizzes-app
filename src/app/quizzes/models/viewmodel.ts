export type Viewstatus = "idle" | "loading" | "success" | "error";

export interface Viewmodel<T> {
    items: T[];
    status: Viewstatus;
    message: string;
    activeItemId: number | string | null;
  }