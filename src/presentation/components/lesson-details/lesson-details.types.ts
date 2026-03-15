export interface LessonDetailsProps {
    data: {
        title: string;
        lessonTitle: string;
        description: string;
        videoUrl: string;
        ebookUrl: string;
    };
    onBack: () => void;
}