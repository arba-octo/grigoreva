// Серверный компонент, нужен для получения данных с сервера и их проброски в пропсах далее
// (чтобы данные с сервера отображались сразу же при загрузке страницы)
import {getResults} from "@/libs/getResults";
import {getFeedbacks} from "@/libs/getFeedbacks";
import {TResult, TFeedBack} from "@/libs/types";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const host: string = process.env.API_URL || "http://localhost:3000";
  let results: TResult[] = []; // Заглушка для результатов работы
  let feedbacks: TFeedBack[]  = []; // Заглушка для отзывов

  try {
    results = await getResults();
  }
  catch (error) { console.error('Ошика в Fetch (catch) в компоненте Home:', error)
  }

  try {
    feedbacks = await getFeedbacks();
  }
  catch (error) { console.error('Ошика в Fetch (catch) в компоненте Home:', error)
  }

  return <HomeClient results={results} feedbacks={feedbacks} />;
}
