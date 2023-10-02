import Tag2 from '@/components/Tag2';

function TagList2({ className = "", tags }){
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag, index) => (
        <Tag2 key={`tag-${index}`}>{tag}</Tag2>
      ))}
    </div>
  )
}

export default TagList2;