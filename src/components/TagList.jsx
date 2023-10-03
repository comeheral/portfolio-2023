import Tag from '@/components/Tag';

function TagList({ className = "", tags }){
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag, index) => (
        <Tag key={`tag-${index}`}>{tag}</Tag>
      ))}
    </div>
  )
}

export default TagList;