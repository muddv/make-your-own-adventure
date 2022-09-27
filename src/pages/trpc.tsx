import { trpc } from '@/utils/trpc'

export default function Trpc() {
    const { data, isLoading } = trpc.useQuery(["hello", { text: "wow" }])

    if (isLoading) return <div>Loading...</div>

    if (data) return <div>{data.greeting}</div>
}