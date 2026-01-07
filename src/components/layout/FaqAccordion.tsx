import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        id: "item-1",
        question: "¿Qué debo hacer antes de mi consulta?",
        answer:
            "Para aprovechar al máximo tu valoración, se recomienda llevar estudios previos como ultrasonido, tomografía, análisis de laboratorio o reportes médicos anteriores. También es útil anotar tus síntomas, cuándo comenzaron y qué los empeora o alivia, así como llevar una lista de tus medicamentos actuales y alergias conocidas. Si presentas dolor intenso o dificultad para moverte, es recomendable asistir acompañado.",
    },
    {
        id: "item-2",
        question: "¿Es necesario acudir en ayunas a mi consulta?",
        answer:
            "No siempre. Solo es necesario acudir en ayunas si se indicó previamente o si se planea realizar un estudio específico. De lo contrario, puedes asistir de manera habitual. Si tienes dudas, puedes enviar un mensaje previo para recibir orientación.",
    },
    {
        id: "item-3",
        question: "¿Cómo saber si mi dolor abdominal es una urgencia?",
        answer:
            "Si el dolor es intenso y se acompaña de fiebre, vómito, náuseas, incapacidad para caminar, sangrado o inflamación súbita, se recomienda acudir de inmediato a valoración médica.",
    },
    {
        id: "item-4",
        question: "¿Qué beneficios tiene la cirugía laparoscópica?",
        answer:
            "La cirugía laparoscópica ofrece incisiones pequeñas, menor dolor postoperatorio, recuperación más rápida, menor riesgo de infección y mejores resultados estéticos. Es el método recomendado para procedimientos como hernias, cirugía de vesícula, apendicitis y otros abordajes abdominales.",
    },
    {
        id: "item-5",
        question: "¿La vasectomía sin bisturí es dolorosa?",
        answer:
            "No. La técnica se realiza mediante una pequeña punción en la piel, sin cortes, con mínima molestia y una recuperación rápida. El paciente puede retomar sus actividades el mismo día o al día siguiente.",
    },
    {
        id: "item-6",
        question: "¿Qué cuidados debo tener después de una cirugía?",
        answer:
            "Generalmente se recomienda evitar esfuerzos físicos los primeros días, mantener la herida limpia y seca, tomar los medicamentos indicados y asistir a las consultas de seguimiento. Dependiendo del tipo de cirugía, recibirás instrucciones específicas y personalizadas.",
    },
];


export default function FaqAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
                <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border! border-border rounded-lg px-2 overflow-hidden hover:border-primary/50 transition-colors"
                >
                    <AccordionTrigger className="px-4 py-4 hover:no-underline font-semibold text-foreground text-left text-xl">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed text-lg">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
