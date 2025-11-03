interface Article {
  date: string
  title: string
  href: string
}

interface ArticleListProps {
  articles: Article[]
}

export const ArticleList = ({ articles }: ArticleListProps) => (
  <div className="flex flex-col">
    {articles.map((article, index) => (
      <a key={index} href={article.href}>
        <div className="flex items-center gap-6 hover:scale-[0.99] transition-all py-2">
          <div className="text-fg-2 w-16 text-right">{article.date}</div>
          <div>{article.title}</div>
        </div>
        {index < articles.length - 1 && <div className="h-px bg-[#f7f7f7]" />}
      </a>
    ))}
  </div>
)
